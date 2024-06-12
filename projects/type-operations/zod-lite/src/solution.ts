// Primitives

export interface SchemaString {
	primitive: "string";
	zType: "primitive";
}

export const string = (): SchemaString => ({
	primitive: "string",
	zType: "primitive",
});

// Literals
export interface SchemaLiteral<Value> {
	value: Value;
	zType: "literal";
}

export const literal = <Value extends string>(
	value: Value
): SchemaLiteral<Value> => ({
	value,
	zType: "literal",
});

// Unions
export interface SchemaUnion<Values extends any[]> {
	values: Values;
	zType: "union";
}

export const union = <Values extends any[]>(
	values: Values
): SchemaUnion<Values> => ({
	values,
	zType: "union",
});

export type UnwrapSchemaUnion<Values> = Values extends (infer Value)[]
	? Infer<Value>
	: never;

// Objects
export interface SchemaObject<Properties> {
	properties: Properties;
	zType: "object";
}

export const object = <Properties>(
	properties: Properties
): SchemaObject<Properties> => ({
	properties,
	zType: "object",
});

export type UnwrapSchemaObject<Properties> = {
	[K in keyof Properties]: Infer<Properties[K]>;
};

export type Infer<Schema> =
	// Primitives (string)
	Schema extends SchemaString
		? string
		: // Literals
		Schema extends SchemaLiteral<infer Value>
		? Value
		: // Unions
		Schema extends SchemaUnion<infer Values>
		? UnwrapSchemaUnion<Values>
		: // Objects
		Schema extends SchemaObject<infer Properties>
		? UnwrapSchemaObject<Properties>
		: never;
