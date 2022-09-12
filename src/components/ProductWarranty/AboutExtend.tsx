/** @jsx h */
import { h, Fragment } from 'preact';

export function AboutExtend() {
  return (
    <Fragment>
      <div class="extend-modal__svg-container">
        <div class="logo-container">
          <img
            class="logo"
            alt=""
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0xLjMzOSAzLjAzM0M2Ljc1OSAxLjYxOCAxMC43OTMuNjk0IDEzLjQ2My4yNmMxLjc5Ni0uMjkyIDMuMjUyLS4wNCA0Ljk1LjY5NS4yODcuMTI0LjU3LjI1Ni45NTcuNDQybC40NjIuMjI0Yy4xODMuMDg5LjMyMy4xNTYuNDYuMjIgMi4wMzcuOTYxIDMuNjM1IDEuMzg5IDYuMDIyIDEuMzk0IDIuNDA3LjAwNSA0LjE4My0uNDI2IDYuNjE5LTEuNDA2LjIxOC0uMDg4IDEuMi0uNDkyIDEuNDY1LS41OTguNTgtLjIzMiAxLjA0Ny0uNDA0IDEuNTEtLjU1IDEuNTMtLjQ4IDIuOTAzLS42MjIgNC4zOTUtLjM2IDIuNDc5LjQzMyA2LjE0MyAxLjM0IDExLjAxNiAyLjcybDEuMTQ5LjMyNy4wMDcgMS4xOTRjLjA2MyAxMC4xMzktMS44ODQgMTkuMTYtNS44NDkgMjcuMDQ1LTMuOTU4IDcuODctMTAuMjIxIDE1LjE5My0xOC43NzIgMjEuOTcxbC0uOTY0Ljc2NC0uOTgxLS43NGMtOS4wNTQtNi44MjYtMTUuNjQ4LTE0LjE0Ni0xOS43NjQtMjEuOTdDMi4wMiAyMy43OS4wMjQgMTQuNzU1LjE1IDQuNTUzTC4xNjUgMy4zNGwxLjE3NC0uMzA3eiIgZmlsbD0iIzA5MDYzNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgICA8cGF0aCBkPSJNOC45NiAzMC4xNTJjMy43MzMgNy4wOTcgOS42ODggMTMuODIgMTcuODgxIDIwLjE2IDcuNzEyLTYuMjg0IDEzLjM1NC0xMi45OTcgMTYuOTQ0LTIwLjEzNCAzLjU3Ni03LjExIDUuNDE0LTE1LjIzOCA1LjUwOC0yNC40MDItNC4yLTEuMTctNy4zODQtMS45NDYtOS41MzgtMi4zMjMtLjk0Ny0uMTY1LTEuODE4LS4wNzYtMi44OTMuMjYyLS4zNzMuMTE4LS43NzEuMjY0LTEuMjgyLjQ2OS0uMjQ4LjA5OS0xLjIyNS41LTEuNDYuNTk1LTIuNzgzIDEuMTItNC45MzUgMS42NDItNy44MTMgMS42MzYtMi45MDMtLjAwNi00Ljk0My0uNTUyLTcuMzcxLTEuNjk3LS4xNDktLjA3LS4yOTgtLjE0MS0uNDg5LS4yMzRsLS40NTgtLjIyMmMtLjM1MS0uMTY5LS42LS4yODUtLjgzOS0uMzg4LTEuMTc5LS41MS0yLjA0LS42Ni0zLjE3Ny0uNDc1LTIuMzU2LjM4NC01LjkxIDEuMTg2LTEwLjY0NyAyLjQwNS4wNDUgOS4xOSAxLjkyNiAxNy4zIDUuNjM0IDI0LjM0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPHBhdGggZD0iTTM3LjgzIDMxLjgwNGgtNy4xN3MtNC4zMDgtNS4xMDQtNC41NC01LjQxYy0xLjA2OCAxLjQxOC00LjMxMiA1LjQxLTQuMzEyIDUuNDFoLTcuMDYybDcuODUtOS40NjgtNy40OS04LjczM2g3LjEzbDE1LjU5MyAxOC4yMDF6IiBmaWxsPSIjMDkwNjM3Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjdBRUU0IiBkPSJNMjcuMiAxNy4yNmwyLjg1NC0zLjY2NWg2LjkzN2wtNi4zMSA3LjczOXoiLz4KICA8L2c+Cjwvc3ZnPgo="
          />
          <img
            class="plus"
            alt=""
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlPSIjMDkwNjM3IiBzdHJva2Utd2lkdGg9IjEuOTU5IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICA8cGF0aCBkPSJNNy4yMDQgMS4zMjd2MTEuMTAxTTEuNjU0IDYuODc3aDExLjEiLz4KICA8L2c+Cjwvc3ZnPgo="
          />
          <img
            class="merchant-logo"
            alt=""
            src="https://extendcoreapiprodextendc-storelogosbucket03b65aac-1hzxdqraz84hj.s3.amazonaws.com/stores/8862eff0-e8c2-47bc-a194-157f853043ec/logo-5b983c74-8551-478b-ba90-fc531933ca7c.png"
          />
          <span class="is-sr-only">Extend plus BlendJet</span>
        </div>
      </div>
      <div class="extend-modal__container">
        <div class="extend-modal__text">
          <div class="extend-modal__text__block">
            Keep your product protected from accidents right away, plus full
            coverage after manufacturer warranties expire.
          </div>
        </div>
        <div class="extend-modal__text__list">
          <div class="extend-modal__text__list__subheading">
            This plan covers:
          </div>
          <ul class="extend-modal__text__list__items">
            <li>Fast and free product replacements</li>
            <li>Accidental damage such as breaks, drops, and spills</li>
            <li>Extended malfunction and wear-and-tear protection</li>
          </ul>

          <div class="extend-modal__text__plan-details">
            <a
              href="https://customers.extend.com/plan_details/10003-blendjet-adh-replace-1y"
              target="_blank">
              Plan Details
            </a>
          </div>
        </div>
        <div class="extend-modal__why-choose">
          <div class="extend-modal__why-choose__support">
            <img
              class="extend-modal__why-choose__support__icon"
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgc3Ryb2tlLXdpZHRoPSIxLjM1OCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICA8cGF0aAogICAgICBkPSJNMTMgMjIuODU4cy03LjU2Ny03LjYxLTkuOTU4LTEwLjI3N2MtMS4xNTMtMS4yODYtMS45NzYtMi45MDctMS45NzYtNC43N0E2Ljc0NSA2Ljc0NSAwIDAxMTMgMy41MDRhNi43NDUgNi43NDUgMCAwMTExLjkzNCA0LjMwOGMwIDEuODYyLS44MjMgMy40ODMtMS45NzYgNC43NjlDMjAuNTY4IDE1LjI0OSAxMyAyMi44NTggMTMgMjIuODU4eiIKICAgICAgc3Ryb2tlPSIjMjI0QkM1Ii8+CiAgICA8cGF0aCBkPSJNMy43MTcgOC4zODdhNC42NzYgNC42NzYgMCAwMTQuNjctNC42NyIgc3Ryb2tlPSIjMjdBRUU0Ii8+CiAgPC9nPgo8L3N2Zz4K"
            />
            Friendly support 24/7
          </div>
          <div class="extend-modal__why-choose__fees">
            <img
              class="extend-modal__why-choose__fees__icon"
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoCiAgICAgIGQ9Ik0yLjU1IDE2LjQyMnYtMS4zMTNDMS4wMTUgMTQuOTY0LjE3NiAxNC4wMDMuMDMyIDEyLjIyNWgxLjQzNWMuMDU0LjQ5Ni4xNjcuODczLjMzOCAxLjEzLjE3Mi4yNTguNDIuNDIyLjc0NS40OTR2LTMuMjM1bC0uMjMtLjA4MWMtLjczMS0uMjYyLTEuMjczLS42MS0xLjYyNS0xLjA0My0uMzUyLS40MzMtLjUyOC0uOTc1LS41MjgtMS42MjQgMC0uNjg2LjIxNy0xLjI2NC42NS0xLjczMy40MzMtLjQ3IDEuMDEtLjc0NSAxLjczMy0uODI2VjQuMTI5aC44NjZ2MS4xNzhjLjY2LjA3MiAxLjE4My4zMTYgMS41Ny43MzEuMzg5LjQxNS42NTUgMS4wMS44IDEuNzg3bC0xLjM0LjIxN2MtLjA5MS0uNDQzLS4yMTgtLjc4MS0uMzgtMS4wMTZhMS4xMiAxLjEyIDAgMDAtLjY1LS40NnYyLjkzOGwuMjg0LjA5NWMuNzY4LjI4IDEuMzI1LjY0IDEuNjcyIDEuMDgzLjM0OC40NDIuNTIyIDEuMDEuNTIyIDEuNzA1IDAgLjc1OS0uMjI0IDEuMzg0LS42NyAxLjg3NS0uNDQ3LjQ5Mi0xLjA1Ljc3NC0xLjgwOC44NDd2MS4zMTNIMi41NXptLjg2Ni0yLjU0NWMuMzQzLS4wNjQuNjA3LS4yMTcuNzkyLS40Ni4xODUtLjI0NC4yNzgtLjU2NS4yNzgtLjk2MiAwLS4zODgtLjA4Mi0uNy0uMjQ0LS45MzQtLjE2Mi0uMjM1LS40MzgtLjQzMy0uODI2LS41OTZ2Mi45NTJ6TTIuNTUgNi41MzljLS42NS4xMjYtLjk3NS41Ni0uOTc1IDEuMyAwIC4zNDMuMDcyLjYxMy4yMTcuODEyLjE0NC4xOTguMzk3LjM3NC43NTguNTI4di0yLjY0eiIKICAgICAgZmlsbD0iIzI3QUVFNCIvPgogICAgPHBhdGgKICAgICAgZD0iTTE1Ljg4NSAyMS42MzVjLTIuMDM0IDAtMy41NC0uODY1LTQuNTE3LTIuNTk2LS45NzgtMS43My0xLjQ2Ny00LjQwNS0xLjQ2Ny04LjAyMkM5LjkwMSAzLjg2IDExLjkzNS4yOCAxNi4wMDIuMjhjMi4wMzQgMCAzLjU0Ljg2NSA0LjUxNyAyLjU5Ni45NzggMS43MyAxLjQ2NyA0LjQwNSAxLjQ2NyA4LjAyMiAwIDcuMTU4LTIuMDM0IDEwLjczNi02LjEwMSAxMC43MzZ6bS4wMy0xLjUyNWMxLjUwNSAwIDIuNTk1LS43MjkgMy4yNy0yLjE4NS42NzQtMS40NTcgMS4wMTItMy43OSAxLjAxMi02Ljk5NiAwLTIuMTktLjE0Ny0zLjk1LS40NC01LjI4LS4yOTQtMS4zMy0uNzQ4LTIuMzAzLTEuMzY0LTIuOTE5LS42MTYtLjYxNi0xLjQyMy0uOTI0LTIuNDItLjkyNC0xLjUwNiAwLTIuNTk2LjcyOS0zLjI3IDIuMTg2LS42NzUgMS40NTYtMS4wMTMgMy43ODgtMS4wMTMgNi45OTUgMCAyLjE5LjE0NyAzLjk1LjQ0IDUuMjguMjk0IDEuMzMuNzQ4IDIuMzAzIDEuMzY0IDIuOTE5LjYxNi42MTYgMS40MjMuOTI0IDIuNDIuOTI0eiIKICAgICAgZmlsbD0iIzIyNEJDNSIvPgogIDwvZz4KPC9zdmc+Cg=="
            />
            No fees. No deductibles.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
