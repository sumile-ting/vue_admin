const MAIN_MENUS = [{
    name: 'guide',
    title: '指南',
    menus: [
        {
            title: '安装',
            url: '/guide/install',
            icon: 'el-icon-location'
        }, {
            title: '快速上手',
            url: '/guide/usage',
            icon: 'el-icon-document'
        }
    ]
}, {
    name: 'component',
    title: '组件',
    menus: [
        {
            title: '表单',
            url: '/component/form',
            icon: 'el-icon-menu',
            children: [{
                title: '单选',
                url: '/component/form/radio',
            }, {
                title: '多选',
                url: '/component/form/checkbox',
            }, {
                title: '输入框',
                url: '/component/form/input',
            }]
        }, {
            title: '数据',
            url: '/component/data',
            icon: 'el-icon-location',
            children: [{
                title: '表格',
                url: '/component/data/table',
            }, {
                title: '分页',
                url: '/component/data/pagination',
            }]
        }
    ]
}, {
    name: 'about',
    title: '关于',
    menus: [
        {
            title: '项目简介',
            url: '/about/project',
            icon: 'el-icon-location',
        }
    ]
}];

export default {MAIN_MENUS};