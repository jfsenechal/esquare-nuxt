export default () => {
    const {
        pending,
        data,
        error
    } = useFetch(
        `https://strapi.marche.be/api/navigation/render/1?type=TREE`
    );
    return {
        pending,
        data,
        error
    };
}