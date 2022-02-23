import api from '../../api/imgur'

const state = {
    images: []
}

const getters = {
    allImages: state => state.images
}

const actions = {
    async fetchImages({ rootState }) {
        // rootState.auth.token (below equivalent)
        const { token } = rootState.auth
        const response = await api.fetchImages(token)
        console.log(response)
    }
}

const mutations = {
    setImages: (state, images) => {
        state.images = images
    }
}