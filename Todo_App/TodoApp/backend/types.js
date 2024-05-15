const zod = require('zod');

const schemaForTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const schemaForId = zod.object({
    id: zod.string(),
});

module.exports = {
    schemaForTodo: schemaForTodo,
    schemaForId: schemaForId
} 