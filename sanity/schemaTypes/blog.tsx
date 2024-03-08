export default {
    name:'blog',
    title:'Blog 部落格',
    type:'document',
    fields: [
        {
            name:'name',
            title:'Blog Title',
            type:'string',
        },
         {
            name:'description',
            title:'Blog Description',
            type:'string',
        },
        {
            name:'images',
            title:'Blog Images',
            type:'array',
            of:[{type:'image'}]
        },
        {
            name: 'releaseDate',
            title: 'release date',
            type: 'date'
        },
        {
            name:'slug',
            title:'Blog slug',
            type:'slug',
            options:{
                source:"name"
            }
        },
        {
            name:'content',
            title:'Blog Content',
            type:'array',
            of:[
                {
                type:"block"
                }
            ]
        },
        {
            name:'categories',
            title:'Categories',
            type:'array',
            of:[{type:'reference', to:{type:'category'}}]
        },
        {
            name:'tags',
            title:'Tags',
            type:'array',
            of:[{type:'reference', to:{type:'tag'}}]
        }
    ]
}