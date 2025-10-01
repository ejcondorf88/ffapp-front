// Script temporal para generar miniatura del video
const generateThumbnail = async () => {
  const video = document.createElement('video');
  video.crossOrigin = 'anonymous';
  video.src = 'https://fundacionfavorita.org/wp-content/uploads/2023/01/VERSION-FINAL-FFAVORITA-HORIZONTAL-MEDIA-1.mp4';
  
  return new Promise((resolve, reject) => {
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = 1; // 1 segundo
    });
    
    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      ctx.drawImage(video, 0, 0);
      
      // Crear enlace de descarga
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video-thumbnail.jpg';
        a.click();
        resolve(url);
      }, 'image/jpeg', 0.8);
    });
    
    video.addEventListener('error', reject);
  });
};

// Ejecutar cuando se cargue la página
if (typeof window !== 'undefined') {
  console.log('Ejecuta generateThumbnail() en la consola del navegador para generar la miniatura');
}

export { generateThumbnail };