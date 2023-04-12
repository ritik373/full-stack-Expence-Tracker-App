const express=require('express');
const hbs=require('hbs');
const path=require('path');
const conn=require('../config/database');

exports.FrontPagewithTable=(req,res)=>{

    const sql="select * from expencedata";
    conn.query(sql,(err,result)=>{
        if(err)throw err;
        // console.log(result)
        res.render('./views/front.hbs',{itemsofArray:result});
    })
}

exports.DeleteItem=(req,res,next)=>{
    const sql=`DELETE FROM expencedata WHERE sno=${req.params.id}`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("your item deleted");
    })
    res.redirect('/');
}
