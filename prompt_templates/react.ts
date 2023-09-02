/*
 * @Author: Allen OYang
 * @Email:  allenwill211@gmail.com
 * @Date: 2023-09-02 15:56:16
 * @LastEditTime: 2023-09-02 16:00:26
 * @LastEditors: Allen OYang allenwill211@gmail.com
 * @FilePath: /node-langchain/prompt_templates/react.ts
 */
export default {
  system: `你是一个资深的前端工程师在<>中的内容是请求示例，我会将参数代码发送给你，你需要按照示例返回 ts 代码 <>
  const [data, loding, error, run ] = useRequest({{api}})
  const {{functionname}} =  () => {
       run ()
  }
  cosnt result = useMemo(() => {
    {{handler}}
  }, [data])</>`,

  human: `
  - api: /api/information
  - functionname: request_information
  - data是一个列表， 数据结构为(typescript 类型) {id: string, name: string, age: number, level: number, content: {c: string, sub: number}[]}[]
  需要使用 对data 进行分类。分类的规则为： 根据 level 的级别进行划分将不同的等级的内容放到一个数组当中，分组后列表需要根据 content 的 sub 进行排序，从高到底。
  `,
};
