const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

const 데이터 = [
    {
        name : '사범대',
        imageSrc : './logo/marker_red.png',
        lat : 33.455302,
        lng : 126.563627
    },
    {
        name : '교양동',
        imageSrc : './logo/marker_red.png',
        lat : 33.455694,
        lng : 126.564467
    },
    {
        name : '아라홀',
        imageSrc : './logo/marker_red.png',
        lat : 33.455712,
        lng : 126.562971
    },
    {
        name : '야외음악당',
        imageSrc : './logo/marker_red.png',
        lat : 33.457096,
        lng : 126.562851
    },
    {
        name : '본관',
        imageSrc : './logo/marker_red.png',
        lat : 33.455915,
        lng : 126.561952
    },
    {
        name : '운동장',
        imageSrc : './logo/marker_red.png',
        lat : 33.455380,
        lng : 126.559676
    },
    {
        name : '신관',
        imageSrc : './logo/marker_red.png',
        lat : 33.455072,
        lng : 126.560683
    },
    {
        name : '외교원',
        imageSrc : './logo/marker_red.png',
        lat : 33.454073,
        lng : 126.560326
    },
    {
        name : '중앙도서관',
        imageSrc : './logo/marker_red.png',
        lat : 33.452694,
        lng : 126.560931
    },
]

const imageSrc = './logo/marker_red.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);