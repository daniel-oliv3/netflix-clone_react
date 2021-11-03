const API_KEY = 'c68fbc45f257fd1be498785007e56ad0';
const API_BASE = 'https://api.themoviedb.org/3';



export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            },
        ]
    }
}