var mongodb = require('./db');

function count(count){
	this.count = count;
}

module.exports = count;

count.getCount = function getCount(callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('countNumber',function(err,collection){
			if (err) {
				mongodb.close();
				return callback(err);
			}
			else{
				
				collection.findOne(function(err,doc){
					var number=0;
					number = doc.ViewCount;
					number = number +1;
					collection.update({title:'ViewCount'},{$set:{ViewCount:number}}, {safe:true, upsert:true}, function(err, result){
                        console.log(result);
                        });

                	return callback(null,number);
				});
				
			}

		});
	});
}
