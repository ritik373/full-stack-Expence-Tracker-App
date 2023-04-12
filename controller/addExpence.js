const conn=require('../config/database');

exports.addExpenceItem=(req,res)=>{
res.render('./views/form.hbs',{dome:"hello"});

}

exports.insertItem=(req,res)=>{
    console.log(req.body);
    const sql=`INSERT INTO expencedata(sno, name, email, password,price) VALUES ('','${req.body.name}','${req.body.email}','${req.body.password}','${req.body.price}')`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;

        console.log("data inserted");
    })

    res.redirect('/');

}

exports.editItem=(req,res)=>{

    const sql=`select * from expencedata where sno=${req.params.id}`;

    conn.query(sql,(err,result)=>{
        console.log(result[0].email);
        res.render('./views/editform.hbs',{id:req.params.id,editvalue:result[0]});
    })


}

exports.setEditData=(req,res)=>{
    // console.log(req.body);
    // console.log(req.params.idx);\
    // UPDATE `expencedata` SET `sno`='[value-1]',`name`='[value-2]',`email`='[value-3]',`password`='[value-4]',`price`='[value-5]' WHERE 1
    const sql=`update expencedata set  name="${req.body.name}" , email="${req.body.email}", password="${req.body.password}",price="${req.body.price}"   where sno="${req.params.idx}"`;

    conn.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("your item updates");

    })
    res.redirect('/')

}