var e=document.querySelector(".logo");new Promise(function(t,n){var o=document.createElement("div");e.addEventListener("click",function(){o.className="message",o.textContent="Promise was resolved!",t(document.body.appendChild(o))}),setTimeout(function(){o.className="message error-message",o.textContent="Promise was rejected!",n(document.body.appendChild(o))},3e3)}).then();
//# sourceMappingURL=index.02b4f08b.js.map
