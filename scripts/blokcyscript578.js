/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_callscript" id="24" inline="false" x="113" y="29"><field name="method">broadcast</field><field name="script">TestScript2</field></block></xml>*#*#*/
require("TestScript2").broadcast(null);
			