var assert = require("assert");
describe("Array", function(){
	describe("#indexOf()",function(){
		it("shoud return -1 when value is not preset", function(){
			assert.equal(-1,[1,2,3].indexOf(5));
			assert.equal(-1,[1,2,3].indexOf(0));
		});
		
	});
	
});