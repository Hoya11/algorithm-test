member_profile 테이블에서

member_idx  = pk
member_profile.gender = 1 이면 여자
member_profile.join_type = k 이면 카카오 로그인
member_profile.weight_goal  (목표체중)
member_profile.created_at  (가입일)

member_weight (체중기록 테이블)

1. 나이 25이상 30이하 카카오 로그인한 여자
2. 체중기록횟수 0번 (한번도 체중기록을 안한경우)

위 두 조건을 만족하는 유저 중
가입일 기준으로 최신 100명의 유저 이름과 목표체중을 객체 배열로

eg)
[
  {
    member_name:"두두다",
    weight_goal:50,
    created_at:"2022-08-09"
  }...
]


풀이

member_profile에서 
member_profile.gender = 1
member_profile.age = 25이상 30이하
member_profile.join_type = k

위 3개의 조건이 일치하는 값 조회 후


해당 구한 값의 member_idx로
member_weight에서

member_weight에서 created_at과 updated_at이 같으면 체중기록을 안한것
order by로 가입일 최신기준 정렬, LIMIT으로 상위 100개만



--- sql query

전체 컬럼 조회
SELECT * FROM table_name;

일부 컬럼 조회
SELECT name, age FROM table_name;

컬럼에 별칭을 설정하여 조회
SELECT name as nickname, age FROM table_name;

특정 조건에 만족하는 데이터 조회 (age가 21 미만인 데이터)
SELECT name, age FROM table_name WHERE age < 21;


