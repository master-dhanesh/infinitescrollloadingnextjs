export const getMorePost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const newPosts = await res.json();
    await wait(2000);
    return newPosts;
};

export async function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
}
