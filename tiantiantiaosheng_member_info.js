/*

QuantumultX:

[rewrite_local]
^https:\/\/api\.tiantiantiaosheng\.com\/api2\/s_plus_member\/info url script-response-body https://raw.githubusercontent.com/gekowa/QuanX-Rules/main/tiantiantiaosheng_member_info.js

[mitm]
hostname = api.tiantiantiaosheng.com

*/

let body = $response.body;
let obj = JSON.parse(body);

obj = {
  "code": 0,
  "msg": "success",
  "data": {
    "is_member": true,
    "member_name": "BIG G",
    "member_expiration_time": "2099-12-31",
    "medal_id": 0,
    "medal_picture": "",
    "today_ttb": false,
    "medal_name": "",
    "renew_status": false,
    "mileage": null,
    "conversion_config": {
      "charge_enabled": true,
      "renew_enabled": true
    },
    "member_type": "big_member",
    "big_expiration_time": "2099-12-31",
    "big_renew_status": false,
    "is_ad_trial": true,
    "is_pure_enjoy": false,
    "pure_enjoy_renew_status": false,
    "pure_enjoy_expiration_time": "",
    "member_growth_value": {
      "level_no": 0,
      "min_value": 0,
      "max_value": 0,
      "growth_value": 0,
      "delta_value": 0,
      "daily_delta": 0,
      "benefit_number": 0,
      "welfare_number": 0
    }
  }
};

body = JSON.stringify(obj);
$done({body});