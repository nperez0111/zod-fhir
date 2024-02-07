const fs = require("fs");
const FHIR_SPECS = ["r2", "r3", "r4", "r4b", "r5"];

fs.mkdirSync("./lib/generated", { recursive: true });

/**
 * This rewrites FhirResource from referencing the Bundle type
 * The Bundle type is generic and not supported by `ts-to-zod`
 */
FHIR_SPECS.forEach((specNumber) => {
  const spec = fs
    .readFileSync(`./node_modules/@types/fhir/${specNumber}.d.ts`)
    .toString()
    .replace(/\s+\|Bundle/g, "");

  fs.writeFileSync(`./lib/generated/fhir-${specNumber}.d.ts`, spec);
});

/**
 * @type {import("ts-to-zod").TsToZodConfig}
 */
module.exports = FHIR_SPECS.map((spec) => ({
  name: `fhir-${spec}`,
  input: `./lib/generated/fhir-${spec}.d.ts`,
  output: `./lib/generated/fhir-${spec}.ts`,
  nameFilter: (tags) => {
    // Exclude Bundle type from the generated types
    // The Bundle type is generic and not supported by `ts-to-zod`
    return !tags.includes("Bundle");
  },
}));
