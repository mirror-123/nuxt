const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => ({
  user: null,
  info:null,
  navs: [{
      name: "首页",
      to: '/'
    },
    {
      name: "登录",
      to: '/login'
    },
    {
      name: "注册",
      to: '/registered'
    }
  ]
})
export const mutations = {
  login(state, text) {
    state.user = text
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('login', auth)
  }
}
export const getters = {
  navslogin(state) {
    if (state.user) {
      return [{ name: "首页", to: '/' },
      { name: '发表文章', to: '/published'},
        { name: state.user.username, to: '/oneself',img:state.user.image ,i:true},
      ]
    } else {
      return state.navs
    }
  }
}
