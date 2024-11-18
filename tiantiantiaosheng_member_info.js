/*

QuantumultX:

[rewrite_local]
^https:\/\/api\.tiantiantiaosheng\.com\/api2\/member_page\/member_info url script-response-body https://raw.githubusercontent.com/gekowa/QuanX-Rules/main/tiantiantiaosheng_member_info.js

[mitm]
hostname = api.tiantiantiaosheng.com

*/

let body = $response.body;
let obj = JSON.parse(body);

obj = {
    "code": 0,
    "msg": "success",
    "data": {
      "member_flag": true,
      "member_type": 1,
      "receive_flag": true,
      "day_count": 166
    }
  };

body = JSON.stringify(obj);
$done({body});