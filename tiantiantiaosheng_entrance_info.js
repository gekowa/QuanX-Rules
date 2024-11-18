/*

QuantumultX:

[rewrite_local]
^https:\/\/api\.tiantiantiaosheng\.com\/api2\/s_plus_member\/entrance_info url script-response-body https://raw.githubusercontent.com/gekowa/QuanX-Rules/main/tiantiantiaosheng_entrance_info.js

[mitm]
hostname = api.tiantiantiaosheng.com

*/

let body = $response.body;
let obj = JSON.parse(body);

obj = {
  "code": 0,
  "msg": "success",
  "data": {
    "member_status": "big_member",
    "entrance_ad": {
      "ad_text": "百度一下，你就知道",
      "ad_url": "https://www.baidu.com"
    }
  }
};


body = JSON.stringify(obj);
$done({body});