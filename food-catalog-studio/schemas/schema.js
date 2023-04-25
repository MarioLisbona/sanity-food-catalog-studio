// // First, we must import the schema creator
// import createSchema from "part:@sanity/base/schema-creator";
// // Then import schema types from any plugins that might expose them
// import schemaTypes from "all:part:@sanity/base/schema-type";
// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: "default",
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     /* Your types here! */
//       {
//         title: 'Foods',
//         name: 'foods',
//         type: 'document',
//         fields: [{
//           title: 'Food Name',
//           name: 'foodName',
//           type: 'string',
//           validation: Rule => Rule.required()
//         },
//         {
//           title: 'A little description',
//           name: 'foodDesc',
//           type: 'text',
//           options: {
//             maxLength: 200,
//           },
//           validation: Rule => Rule.required()
//         },
//         {
//           title: 'Food Image',
//           name: 'foodImage',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         }
//       ]
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "document",
//       fields: [{
//           title: "Title",
//           name: "title",
//           type: "string",
//         },
//         {
//           title: "Slug",
//           name: "slug",
//           type: "slug",
//           options: {
//             source: "title",
//             maxLength: 96,
//           },
//         },
//         {
//           title: "Description",
//           name: "description",
//           type: "text",
//         },
//         {
//           title: "Image",
//           name: "image",
//           type: "image",
//           options: {
//             hotspot: true,
//           },
//         },
//         {
//           title: "Hex Code",
//           name: "hexCode",
//           type: "string",
//         },
//       ],
//     }
//   ]),
// });