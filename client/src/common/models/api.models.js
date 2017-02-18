class Api {
    constructor($http, $q) {
        "ngInject";

        Object.assign(this, {$http, $q})
    }

    fetchData() {
        return this.$http.get("/data/stories.json")
            .then(res=>{
                return this.$q.when(res)
            })
    }
}

export default Api;
