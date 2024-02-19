export const CustomizeWeb3Modal = (closeModal) => {
  const isExisiting = document.getElementsByClassName("web3modal-modal-title");
  if (isExisiting.length) return;
  const modal = document.getElementsByClassName("web3modal-modal-card");
  var wrapper = document.createElement("div");
  const modalChilds = [...modal[0].childNodes];
  for (let i = 0; i < modalChilds.length; i++) {
    wrapper.appendChild(modalChilds[i]);
  }

  wrapper.classList.add("web3modal-modal-field");
  
  var title = document.createElement("div");
  title.classList.add("web3modal-modal-title");
  wrapper.appendChild(title);
  var titleText = document.createElement("div");
  titleText.innerText = "Connect Your Wallet";
  var closeButton = document.createElement("div");
  title.appendChild(titleText);
  title.appendChild(closeButton);
  closeButton.onclick = closeModal;
  closeButton.innerHTML = `<svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    </svg>`;
  modal[0].appendChild(title);
  modal[0].appendChild(wrapper);

  // // set element as child of wrapper
  // wrapper.appendChild(modal);
};
