function GetAppName() {
  //var nid = aqEnvironment.GetEnvironmentVariable("MAGAYA_NETWORK_ID");
  //Project.Variables.AddVariable("appName", "String") 
  
  Project.Variables.$set("appName", "Magaya Supply Chain Solution - Postgress SQL II - User: Administrator (administrator)");
    Log.Message(Project.Variables.appName)  
}