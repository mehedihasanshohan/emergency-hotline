//  dom selection
const servicesGrid = document.getElementById('services-grid');
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const coinsCount = document.getElementById('coins-count');
const heartsCount = document.getElementById('hearts-count');
const copyCount = document.getElementById('copy-count');
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const alertOkBtn = document.getElementById('alert-ok-btn');


  // control heart icon count
  document.querySelectorAll('.heart-icon').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
    heartsCount.textContent = parseInt(heartsCount.textContent) + 1;
    });
  });

  servicesGrid.addEventListener('click', (event) => {
    const target = event.target;

    const heartBtn = target.closest('.heart-icon');
      if (heartBtn) {
        let currentHearts = parseInt(heartsCount.textContent);
        heartsCount.textContent = currentHearts + 1;
    }

      if (target.classList.contains('call-btn')) {
        let currentCoins = parseInt(coinsCount.textContent);
      if (currentCoins < 20) {
        alert('You do not have enough coins to make a call.');
        return;
      }

     coinsCount.textContent = currentCoins - 20;

      const serviceName = target.dataset.serviceName;
      const serviceNumber = target.dataset.serviceNumber;
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      // get time
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      // Add to call history
      const historyItem = document.createElement('div');
        historyItem.className = 'bg-gray-50 p-4 rounded-lg flex items-center justify-between text-sm';
        historyItem.innerHTML = `
          <div>
              <p class="font-semibold text-gray-800">${serviceName}</p>
              <p class="text-gray-500">${serviceNumber}</p>
          </div>
          <span class="text-gray-500">${timeString}</span>
          `;
        callHistoryContainer.prepend(historyItem);
      }

       if (target.classList.contains('copy-btn')) {
        const hotlineNumber = target.dataset.hotlineNumber;

        const tempInput = document.createElement('input');
        tempInput.value = hotlineNumber;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');

        alert(`"${hotlineNumber}" copied on clipboard!`);
        let currentCopies = parseInt(copyCount.textContent);
        copyCount.textContent = currentCopies + 1;

        document.body.removeChild(tempInput);
        }
        });

        // clear call history
        clearHistoryBtn.addEventListener('click', () => {
            callHistoryContainer.innerHTML = '';
            alert('Call history cleared.');
        });








