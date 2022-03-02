---
title: Con-Item API v1
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="con-item-api">Con-Item API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

콘 기반 이벤트 페이지 프로젝트의 API swagger입니다.

Base URLs:

* <a href="/">/</a>

<a href="https://www.google.com/policies/terms/">Terms of service</a>
Email: <a href="mailto:contact@snippets.local">Support</a> 
 License: BSD License

# Authentication

- HTTP Authentication, scheme: basic 

<h1 id="con-item-api-core">core</h1>

## core_api_cicd_notification_create

<a id="opIdcore_api_cicd_notification_create"></a>

`POST /core/api/cicd_notification`

<h3 id="core_api_cicd_notification_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="con-item-api-fantem">fantem</h1>

## fantem_api_double_check_list

<a id="opIdfantem_api_double_check_list"></a>

`GET /fantem/api/double_check`

중복확인 테스트

<h3 id="fantem_api_double_check_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nickname|query|string|false|닉네임 중복확인용 API |

<h3 id="fantem_api_double_check_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## fantem_api_fantem_create

<a id="opIdfantem_api_fantem_create"></a>

`POST /fantem/api/fantem`

팬템 발급

> Body parameter

```json
{
  "artist_id": 39235,
  "nickname": "string",
  "artist_name": "조정석",
  "artist_postposition": "을",
  "nickname_postposition": "가",
  "message": "응원응원해",
  "pattern_1": "string",
  "pattern_2": "string",
  "background_color": "#E03938",
  "text_theme": "#000000",
  "channel": true
}
```

<h3 id="fantem_api_fantem_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» artist_id|body|integer|false|팬템을 발급받을 아티스트 Id|
|» nickname|body|string|false|응원보드에서 사용할 사용자 닉네임|
|» artist_name|body|string|false|아티스트|
|» artist_postposition|body|string|false|팬템 내 아티스트 다음에 붙는 전치사로 '을/를'를 중 하나|
|» nickname_postposition|body|string|false|팬템 내 닉네임 다음에 붙는 전치사로 '이/가' 중 하나|
|» message|body|string|false|팬템 내 응원 메시지로 최대 7자|
|» pattern_1|body|string|false|팬템 패턴 1|
|» pattern_2|body|string|false|팬템 패턴 2|
|» background_color|body|string|false|팬템 배경색상|
|» text_theme|body|string|false|팬템 글자 색상|
|» channel|body|boolean|false|응원보드 채널 추가할지 여부|

<h3 id="fantem_api_fantem_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|HTTP_202_ACCEPTED|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest(400), Validation error(40000), NOT_YET_PASSED_DAYS_ERROR(40001)NICKNAME_LENGTH_OVER_ERROR(40002), NICKNAME_DOUBLE_CHECKED_ERROR(40003), PROHIBIT_WORD_ERROR(40004)ARTIST_FORBIDDEN(40005)|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|HasNoKakaoAccountError(40100)|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|INTERNAL_SERVER_ERROR(500), CON_SERVER_ERROR(50001), FUNDING_SERVER_ERROR(50002), WITHDRAW_FAILURE_ERROR(50003)DELETE_FAILURE_ERROR(50004), CREATE_FAILURE_ERROR(50005), FANTEM_DATA_INVALID_FORMAT_ERROR(50006), ISSUE_FANTEM_FAILURE(50007)|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## fantem_api_favorites_list

<a id="opIdfantem_api_favorites_list"></a>

`GET /fantem/api/favorites`

아티스트 검색 API

<h3 id="fantem_api_favorites_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|검색한 아티스트명|

<h3 id="fantem_api_favorites_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## fantem_api_prohibit_create

<a id="opIdfantem_api_prohibit_create"></a>

`POST /fantem/api/prohibit`

금칙어 테스트

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="fantem_api_prohibit_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» text|body|string|false|금칙어 체크할 텍스트|

> Example responses

> 201 Response

```json
{
  "text": "string"
}
```

<h3 id="fantem_api_prohibit_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

<h3 id="fantem_api_prohibit_create-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» text|string|false|none|금칙어 체크할 텍스트|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## fantem_api_user_list

<a id="opIdfantem_api_user_list"></a>

`GET /fantem/api/user`

팬템 발급 가능여부 체크 용 API

<h3 id="fantem_api_user_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="con-item-api-fantem-callback">fantem/callback</h1>

## fantem_api_is_delete_finished_create

<a id="opIdfantem_api_is_delete_finished_create"></a>

`POST /fantem/api/is_delete_finished`

삭제 TX 종료 여부 콜백 API

<h3 id="fantem_api_is_delete_finished_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## fantem_api_is_withdraw_finished_create

<a id="opIdfantem_api_is_withdraw_finished_create"></a>

`POST /fantem/api/is_withdraw_finished`

회수 TX 종료 여부 콜백 API

<h3 id="fantem_api_is_withdraw_finished_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="con-item-api-hrdks">hrdks</h1>

## hrdks_api_v1_enc-cards_list

<a id="opIdhrdks_api_v1_enc-cards_list"></a>

`GET /hrdks/api/v1/enc-cards`

*산업인력공단 자격증 리스트 가져오기*

⚠ *`CQRS` not applied*

1. (Query) 암호화 템플릿 적용된, 산인공 자격증 데이터 요청
2. (Command) async Mcard 발급
    - 암호화 적용되지 않은 mcard의 경우 withdraw 진행
    - 암호화 적용되었지만, mcard 리스트에 존재 하지 않는 경우 발급  

<h3 id="hrdks_api_v1_enc-cards_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mcard_encryption_spec_id|query|string|true|none|
|enc_key|query|string|true|none|
|enc_iv|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "hrdk_name_list": [
    "string"
  ]
}
```

<h3 id="hrdks_api_v1_enc-cards_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Output](#schemaoutput)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|```
{

	"code": "400"

	"default_code": "40011"

	"message": "산업인력 자격증을 보유하고 있지 않습니다."

}

```|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|```
{

	"code": "401"

	"default_code": "40100"

	"message": "has no kakao account"

}

```|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|```
{

	"code": "500"

	"default_code": "500"

	"message": "A Internal server error occurred."

}

```|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## hrdks_api_v1_pre-validate_list

<a id="opIdhrdks_api_v1_pre-validate_list"></a>

`GET /hrdks/api/v1/pre-validate/`

*산업인력공단 자격증 발급 페이지 접근 validate*

1. `kakao` 버전 체크
2. `wallet` 가입 여부 체크

<h3 id="hrdks_api_v1_pre-validate_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|```
{

	"code": "400"

	"default_code": "40009"

	"message": "KakaoTalk 버전 업데이트가 필요합니다."

}

```|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|```
{

	"code": "401"

	"default_code": "40103"

	"message": "지갑 서비스에 가입되지 않은 회원입니다."

}

```|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|```
{

	"code": "500"

	"default_code": "500"

	"message": "A Internal server error occurred."

}

```|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

<h1 id="con-item-api-minter">minter</h1>

## minter_api_access_token_list

<a id="opIdminter_api_access_token_list"></a>

`GET /minter/api/access_token`

<h3 id="minter_api_access_token_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## minter_api_is_withdraw_finished_create

<a id="opIdminter_api_is_withdraw_finished_create"></a>

`POST /minter/api/is_withdraw_finished`

<h3 id="minter_api_is_withdraw_finished_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## minter_api_ldap_login_create

<a id="opIdminter_api_ldap_login_create"></a>

`POST /minter/api/ldap_login`

<h3 id="minter_api_ldap_login_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## minter_api_mcard_list

<a id="opIdminter_api_mcard_list"></a>

`GET /minter/api/mcard`

<h3 id="minter_api_mcard_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## minter_api_mcard_create

<a id="opIdminter_api_mcard_create"></a>

`POST /minter/api/mcard`

<h3 id="minter_api_mcard_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

## minter_api_verify_list

<a id="opIdminter_api_verify_list"></a>

`GET /minter/api/verify`

<h3 id="minter_api_verify_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Basic
</aside>

# Schemas

<h2 id="tocS_Output">Output</h2>
<!-- backwards compatibility -->
<a id="schemaoutput"></a>
<a id="schema_Output"></a>
<a id="tocSoutput"></a>
<a id="tocsoutput"></a>

```json
{
  "hrdk_name_list": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hrdk_name_list|[string]|true|none|none|

