import { useRef, useEffect } from 'react';

function MenuTrack(props) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleMouseDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
      
    };

    const handleMouseUp = () => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleMouseMove = (e) => {
      if (track.dataset.mouseDownAt === '0') return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`,
      }, { duration: 1200, fill: 'forwards' });

      for (const image of track.getElementsByClassName('image')) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`,
        }, { duration: 1200, fill: 'forwards' });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      {/*<img class="image" src={props.mediaItems.map((media) => (media.image))} draggable="false" />*/}
    </div>
  );


}

export default MenuTrack