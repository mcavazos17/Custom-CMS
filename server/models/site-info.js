var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// Create a new Keystone list called Site Info
var Site_Info = new keystone.List('Site', {
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: '-createdAt',
});

//Adding option to add a banner image
var Site_Banner_Img = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // Path where files will be stored
        path: keystone.expandPath('server/public/img'),
        generateFilename: (file, index) => {
            return file.originalname;
        },
        whenExists: 'error',
        // Path where files will be served
        publicPath: '/public/img',
    },
});

//Adding fields for Site Info
Site_Info.add({
    name: {
        type: String,
        required: true
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft'
    },
    author: {
        type: Types.Relationship,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    publishedAt: Date,
    image: {
        type: Types.File,
        storage: Site_Banner_Img,
        mimetpye: '.jpeg, .jpg, .gif, .svg, .png'
    },
    header: {
        type: Types.Html,
        wysiwyg: true,
        height: 150
    },
    features: {
        type: Types.Html,
        wysiwyg: true,
        height: 500
    },  height: 500
});

//Settting the default order of the columns on the admin tab
Site_Info.defaultColumns = 'name, state|20%, auther, publishedAt|15%';
Site_Info.register();