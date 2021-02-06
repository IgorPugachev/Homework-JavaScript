/*
Выведите в консоль значения, указанные рядом с комментариями: const post = { author: "John", //вывести этот текст postId: 23, comments: [ { userId: 10, userName: "Alex", text: "lorem ipsum", rating: { likes: 10, dislikes: 2 //вывести это число } }, { userId: 5, //вывести это число userName: "Jane", text: "lorem ipsum 2", //вывести этот текст rating: { likes: 3, dislikes: 1 } }, ] };
*/

const post = {
    author: "John", //вывести этот текст
    postID: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число
                }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
            },
    ]
}

let textJohn = post.author;
console.log(textJohn);

let textDislikes = post.comments[0].rating.dislikes;
console.log(textDislikes);

let textUserID = post.comments[1].userId;
console.log(textUserID);

let textLorem = post.comments[1].text;
console.log(textLorem);