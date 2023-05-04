"use strict";
// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <style>
code[class*="language-"],
pre[class*="language-"] {
color: #f92aad;
text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
background: none;
font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
font-size: 1em;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
word-wrap: normal;
line-height: 1.5;

-moz-tab-size: 4;
-o-tab-size: 4;
tab-size: 4;

-webkit-hyphens: none;
-moz-hyphens: none;
-ms-hyphens: none;
hyphens: none;
}
/* Code blocks */
pre[class*="language-"] {
padding: 1em;
margin: .5em 0;
overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
background-color: transparent !important;
background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
}

/* Inline code */
:not(pre) > code[class*="language-"] {
padding: .1em;
border-radius: .3em;
white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
color: #8e8e8e;
}

.token.punctuation {
color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.number,
.token.unit,
.token.hexcode,
.token.deleted {
color: #e2777a;
}

.token.property,
.token.selector {
color: #72f1b8;
text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
}

.token.function-name {
color: #6196cc;
}

.token.boolean,
.token.selector .token.id,
.token.function {
color: #fdfdfd;
text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975;
}

.token.class-name {
color: #fff5f6;
text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;
}

.token.constant,
.token.symbol {
color: #f92aad;
text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
}

.token.important,
.token.atrule,
.token.keyword,
.token.selector .token.class,
.token.builtin {
color: #f4eee4;
text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
color: #f87c32;
}

.token.operator,
.token.entity,
.token.url {
color: #67cdcc;
}

.token.important,
.token.bold {
font-weight: bold;
}

.token.italic {
font-style: italic;
}

.token.entity {
cursor: help;
}

.token.inserted {
color: green;
}
  
  
    .highlight {
      position: relative;
    }
    .highlight .code .copy-btn{
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 0.5rem;
      opacity: 1;
      /*font-weight: 700;*/
      color: orchid;
      cursor: pointer;
      transination: opacity 0.3s;
      font-size: 1rem;
    }
    .highlight .code .copy-btn:hover{
      color: var(--text-code);
      opacity: 0.75;
    }
    .highlight .code .copy-btn.success {
      color: var(--swiper-theme-color);
      opacity: 0.75;

    }

  </style>
  <script>
    // ori code 
    const codeElementArr = document.querySelectorAll('.code')
    codeElementArr.forEach(code => {
      const codeBeforeWidth = window.getComputedStyle(code, '::before').width.split('px')[0]
      const codeBeforePadding = window.getComputedStyle(code, '::before').padding.split(' ').pop().split('px')[0]

      // copy btn
      const codeCopyBtn = document.createElement('div')
      codeCopyBtn.classList.add('copy-btn')
      codeCopyBtn.style.right = Number(codeBeforeWidth) + Number(codeBeforePadding) * 2 + 'px'
      codeCopyBtn.innerText = 'copy'
      code.appendChild(codeCopyBtn)

      codeCopyBtn.addEventListener('click', async () => {
        const currentCodeElement = code.children[0]?.innerText
        await copyCode(currentCodeElement)


        codeCopyBtn.innerText = 'Copied!'
        codeCopyBtn.classList.add('success')

        setTimeout(() => {
          codeCopyBtn.innerText = 'copy'
          codeCopyBtn.classList.remove('success')
        },1000)
      })
    })

    async function copyCode(currentCode) {
      console.log(currentCode)
      console.log('copy')
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(currentCode)
        } catch (error) {
          // 未获得用户许可
          console.error(error)
        }
      } else {
        console.error('当前浏览器不支持此api')
      }
    }
  </script>
  `;
});
