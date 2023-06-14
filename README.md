# 마시멜롱즈(@marshemllongz)

## <a href="https://marshemllongz-flavv42hd-gilpop8663.vercel.app/">사이트 바로가기</a>

## <a href="https://www.chromatic.com/build?appId=64896b7cff19d4b4c9a4bf06&number=4">스토리북 바로가기</a>

## 프로젝트 설명

마시멜롱즈 캐릭터 굿즈 판매 사이트입니다

## 실행 방법

### 0. 패키지 설치

```
npm install
```

### 1. .env 파일 생성 후 키 입력하기

vercel에서 확인 가능!

```
DATABASE_URL=

CLOUDFLARE_IMAGE_API_KEY=

CLOUDFLARE_ACCOUNT_ID=
```

### 2. .env.development 파일 생성

vercel에서 확인 가능!

```
DATABASE_URL=

CLOUDFLARE_IMAGE_API_KEY=

CLOUDFLARE_ACCOUNT_ID=
```

### 3. pscale에 로그인 하기

```
pscale login
```

### 4. pscale 데이터 베이스와 연결하기

```
pscale connect carrot-market



배포 브런치  => mytutor

개발 브런치 => indexes
```

### 5. 연결하면 나오는 아이피를 .env에 연결

.env

```
DATABASE_URL = 'mysql://${아이피}/carrot-market';
```

### 6. 실행

```
npm run dev
```
