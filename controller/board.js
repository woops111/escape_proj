const { board_content, sequelize } = require('../db/models')
const { knex } = require('knex')

const getList = async (board_alias) => {
    /*
    const contents = await board_content.findAll({
        attributes: ['idx','mem_idx','mem_nick','title','reg_dt']
        , where: {
            board_alias:board_alias
            //, show_yn:'Y'
            , del_yn:'N'
        }
        , order: [
            ['seq_grp','DESC']
            , ['seq','DESC']
        ]
    })
    return contents.dataValues;

    */

    /*
    const sql_count = " SELECT COUNT(*) as cnt FROM board_content WHERE board_alias=$ba AND del_yn='N' ORDER BY seq_grp DESC, seq DESC "
    const row_count = await sequelize.query(sql_count,{ bind: {ba:board_alias}, type:sequelize.QueryTypes.SELECT } )[0].cnt;

    const sql = " SELECT idx, mem_idx, mem_nick, title, reg_dt FROM board_content WHERE board_alias=$ba AND del_yn='N' ORDER BY seq_grp DESC, seq DESC "
    const results = await sequelize.query(sql,{ bind: {ba:board_alias}, type:sequelize.QueryTypes.SELECT } );

    return {row_count,results}
    */
    
    let rv;
    knex('board_content')
        .where({
            board_alias:board_alias
        })
        .count('ba_idx',{as:'cnt'})
        .then( cnt => { rv = cnt})
        
    return rv;
}

const regContent = async (req) => {
    /*
    
    
    const [ results, metadata] = await sequelize.query(' SELECT MAX(seq) FROM board_content WHERE board_idx=? ', board_idx)
    */
    const { c_idx, board_idx,board_alias,title,content } = req.body

    const max_seq_sql = " SELECT IFNULL(MAX(seq),0)+1 as val FROM board_content WHERE board_alias=$ba "
    const max_seq_rst = await sequelize.query(max_seq_sql,{ bind: {ba:board_alias}, type:sequelize.QueryTypes.SELECT } );
    const max_seq = max_seq_rst[0].val;
    const seq_grp = max_seq, mem_idx = 1, mem_nick='nick', ip_addr = '127.0.0.1'

    const insert_sql = ` 
        INSERT INTO board_content ( board_idx, board_alias, seq, seq_grp, parent_idx, mem_idx, mem_nick, title, content, show_yn, reg_dt, upd_dt, ip_addr, del_yn ) 
        SELECT ${board_idx}, '${board_alias}', ${max_seq}, ${seq_grp}, null, ${mem_idx}, '${mem_nick}', '${title}', '${content}', 'N', now(), now(), '${ip_addr}','N'
    `
console.log(insert_sql);
    const results = await sequelize.query(insert_sql,{ type:sequelize.QueryTypes.INSERT } );
    console.log(results);
}

module.exports = {
    getList
    , regContent
}