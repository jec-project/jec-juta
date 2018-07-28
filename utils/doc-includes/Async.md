@Test({
  description: "should return the result of an asynchronous operation"
})
public asyncMethod(Async callback:function):void {
  // Config here...
  db.find((err:any)=>{
    callback(err);
  });
}