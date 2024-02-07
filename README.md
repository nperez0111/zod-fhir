# Zod-FHIR

This is an attempt at making a Zod schema for FHIR resources. It is a work in progress and is not yet complete.

Unfortunately, `ts-to-zod` does not output valid Zod schemas for the FHIR resources. This is because the FHIR resources make heavy use of recursive types, which `ts-to-zod` does not handle well.

The goal of this project is to leverage the amazing work to specify the FHIR resources in TypeScript and convert those into Zod schemas.
