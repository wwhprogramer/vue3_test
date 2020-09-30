import template from './index.html'
import { ref, reactive, onMounted } from '@vue/composition-api'
import userService from '@service/userService'

const comm = {
    template,
    props: {
        propData: Number
    },
    // 1、props 要先声明才能取值，attrs 不用先声明
    // 2、props 声明过的属性，attrs 里不会再出现
    // 3、props 不包含事件，attrs 包含
    // 4、props 支持 string 以外的类型，attrs 只有 string 类型
    setup(props, ctx) {
        ctx.parent.propData = 1
        const userList = ref([])
        const userHtml = ref(null)
        const userJSON = ref(null)
        const urlHeader = ref("http://")
        const urlJSONHeader = ref("http://")
        const url = ref('')
        const urlJSON = ref('')
        const state = reactive({
            userList: []
        })

        const form = reactive({
            username: '',
            password: ''
        })

        const getAllUser = () => {
            userService.getAllUser(
                {},
                res => {
                    userList.value = res
                    state.userList = res
                    ctx.emit('methodData', res)
                },
                err => {
                    console.log(err)
                }
            )
        }

        const getHtml = () => {
            if(!url.value) {
                return
            }
            userService.getHtml(
                {
                    url: urlHeader.value + url.value
                },
                res => {
                    userHtml.value = res
                },
                err => {
                    console.log(err)
                }
            )
        }

        const getJSON = () => {
            if(!urlJSON.value) {
                return
            }
            userService.getHtml(
                {
                    url: urlJSONHeader.value + urlJSON.value
                },
                res => {
                    userJSON.value = res
                },
                err => {
                    console.log(err)
                }
            )
        }

        const submit = () => {
            const {username, password} = form
            userService.save(
                {
                    username, password
                },
                res => {
                    getAllUser()
                },
                err => {
                    console.log(err)
                }
            )
        }

        onMounted(() => {
            getAllUser()
        })

        return {
            userList,
            state,
            urlHeader,
            urlJSONHeader,
            url,
            urlJSON,
            userHtml,
            userJSON,
            getHtml,
            getJSON,
            form,
            submit
        }
    }
}

export default comm