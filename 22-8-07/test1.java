// Map.Entry 리스트 작성
		List<Entry<String, Integer>> list_entries = new ArrayList<Entry<String, Integer>>(testMap.entrySet());

		// 비교함수 Comparator를 사용하여 내림 차순으로 정렬
		Collections.sort(list_entries, new Comparator<Entry<String, Integer>>() {
			// compare로 값을 비교
			public int compare(Entry<String, Integer> obj1, Entry<String, Integer> obj2)
			{
				// 내림 차순으로 정렬
				return obj2.getValue().compareTo(obj1.getValue());
			}
		});

		System.out.println("내림 차순 정렬");
		// 결과 출력
		for(Entry<String, Integer> entry : list_entries) {
			System.out.println(entry.getKey() + " : " + entry.getValue());
		}
-----------------------------------

		List<Entry<String, Integer>> list_entries = new ArrayList<Entry<String, Integer>>(testMap.entrySet());

		Collections.sort(list_entries, new Comparator<Entry<String, Integer>>() {
			// compare로 값을 비교
			public int compare(Entry<String, Integer> obj1, Entry<String, Integer> obj2) {
				// 오름 차순 정렬
				return obj1.getValue().compareTo(obj2.getValue());
			}
		});

		System.out.println("오름 차순 정렬");
		// 결과 출력
		for(Entry<String, Integer> entry : list_entries) {
			System.out.println(entry.getKey() + " : " + entry.getValue());
		}
	}


            // List<String> list = new ArrayList<String>();
        // for(int i=0; i<movie.length; i++)
        //     if(!list.contains(movie[i]))
        //         list .add(movie[i]);
        
        // Collections.sort(list);
        // for(String i : list)
        //     System.out.print(i + " ");
        
        

        public class Solution {
    public String[] solution(String[] movie) {
        String[] ans = {};

        ArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "A", "B", "A"));
        System.out.println("원본 : " + list); // [A, B, C, A, B, A]
                 
        // ArrayList 원소 빈도수 출력
        Set<String> set = new HashSet<String>(list);
            for (String str : set) {
                System.out.println(str + " : " + Collections.frequency(list, str));        
            }


        return ans;
    }
}



List<String> asList = Arrays.asList(array);
Set<String> set = new HashSet<String>(asList);
Map<String, Integer> map = new HashMap<>();
for (String str : set) 
	map.put(str, Collections.frequency(asList, str));
System.out.println(map);