

const openSound = document.getElementById("openSound");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

music.volume = 0.4;

#mail.open #letter {
    transform: translate(-50%, -80px);
    transition: 0.5s;
    z-index: 4;
}

#mail.open #opmail {
    transform: rotateX(180deg);
}


letter.addEventListener("click", () => {

    letter.classList.toggle("open");

    if(letter.classList.contains("open")){
        openSound.play();
        music.play();

        const texts = letter.querySelectorAll("p");

        texts.forEach((p,i)=>{

            setTimeout(()=>{

                // ให้ข้อความขึ้น
                p.style.opacity = 1;

                // แล้วเลื่อนไปหาข้อความนั้น
                p.scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

            },1000 + (i*1500));

        });

    }else{

        // รีเซ็ตตอนปิดจดหมาย
        texts.forEach(p=>{
            p.style.opacity = 0;
        });

        // เลื่อนกลับไปด้านบน
        letter.scrollTo({
            top:0,
            behavior:"smooth"
        });

        // หยุดเพลง
        music.pause();
        music.currentTime = 0;

    }

});

document.querySelectorAll(".birthday-img").forEach(img => {
    img.addEventListener("click", (e) => {
        e.stopPropagation();
        img.classList.toggle("zoom");
    });
});
