import Papa from "papaparse";

const PRODUCTS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVNHfmaKo-qaOJnoFho4y_PjgUOnbiSC5cFuVh4T2QI562xmv115zsh4WPOurFxajxBPRfVob8UwiS/pub?gid=0&single=true&output=csv";

const REQUIRED_COLUMNS = [
  "id",
  "name",
  "price",
  "description",
  "image",
  "active",
  "sort_order",
];

export async function fetchSheetProducts(signal) {
  const response = await fetch(PRODUCTS_CSV_URL, {
    signal,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed: ${response.status}`);
  }

  const csv = await response.text();
  const result = Papa.parse(csv, {
    header: true,
    skipEmptyLines: "greedy",
    transformHeader: (header) => header.trim(),
  });

  if (result.errors.length > 0) {
    throw new Error("Google Sheets returned malformed CSV data");
  }

  if (!REQUIRED_COLUMNS.every((column) => result.meta.fields?.includes(column))) {
    throw new Error("Google Sheets is missing required product columns");
  }

  const activeRows = result.data.filter(
    (row) => row.active?.trim().toUpperCase() === "TRUE",
  );

  const sheetProducts = activeRows.map((row) => {
    const sortOrder = row.sort_order?.trim();
    const product = {
      id: row.id?.trim(),
      name: row.name?.trim(),
      price: row.price?.trim(),
      description: row.description?.trim(),
      image: row.image?.trim(),
      sortOrder: Number(sortOrder),
    };

    if (
      !product.id ||
      !product.name ||
      !product.price ||
      !product.description ||
      !product.image ||
      !sortOrder ||
      !Number.isFinite(product.sortOrder)
    ) {
      throw new Error("Google Sheets contains an invalid active product");
    }

    return product;
  });

  if (sheetProducts.length === 0) {
    throw new Error("Google Sheets contains no valid active products");
  }

  if (new Set(sheetProducts.map((product) => product.id)).size !== sheetProducts.length) {
    throw new Error("Google Sheets contains duplicate product ids");
  }

  return sheetProducts.sort((a, b) => a.sortOrder - b.sortOrder);
}
