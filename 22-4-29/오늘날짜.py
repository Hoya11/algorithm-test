# 문제
# 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.

# 입력
# 입력은 없다.

# 출력
# 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.

import datetime
print(str(datetime.datetime.now())[:10])

#str을 통해 datetime을 string으로 출력한다.
#datetime.datetime.now()를 통해 현재의 시간을 출력한다.
#[:10]을 통해 10개의 문자 출력하기