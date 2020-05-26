// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // 写入的环境ID
  env: 'lin-hy5l0'
})
// 获取数据库对象
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.category) {
    case "reading":
      return db
        .collection("post")
        .doc(event.id)
        .update({
          data: {
            readingNum: _.inc(1),
          },
        });
      break;
    case "collect":
      return db
        .collection("post")
        .doc(event.id)
        .update({
          data: {
            collectionNum: _.inc(1),
          },
        });
      break;
    case "disCollect":
      return db
        .collection("post")
        .doc(event.id)
        .update({
          data: {
            collectionNum: _.inc(-1),
          },
        });
      break;
    case "comment":
      return db
        .collection("post")
        .doc(event.id)
        .update({
          data: {
            commentNum: _.inc(1),
          },
        });
      break;
  }
}