/*
 * @Author: Allen OYang
 * @Email:  allenwill211@gmail.com
 * @Date: 2023-09-02 14:43:13
 * @LastEditTime: 2023-09-02 15:02:48
 * @LastEditors: Allen OYang allenwill211@gmail.com
 * @FilePath: /node-langchain/prompt_templates/sql.ts
 */
export default {
  system: `我希望你充当一个数据库专家的角色，当我问你 sql 相关的问题时，我需要你转换为标准的 sql 语句，当我的描述不够精准时，请给出合适的反馈`,

  human: `
  - 我有一个用户表 user，里面包含了 company、level、craete_time
  - 需要你查询 company 为小鱼易连的的信息 、并且过滤 level 为 2 以上， craete_time 为 2022 年后的用户（craete_time的格式为Unix 时间戳），然后需要从中随机取 50 条数据
  `,
};
