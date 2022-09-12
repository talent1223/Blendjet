/** @jsx h */
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Modal } from '../Modal/Modal';

function AboutSubscriptions() {
  return (
    <Fragment>
      <div class="about-subscriptions__heading">
        Get Delicious <br /> On Demand <br /> And save 25%
      </div>
      <div class="about-subscriptions__column">
        <div class="about-subscriptions__icon">
          <svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
            <title>Group 2</title>
            <defs>
              <linearGradient
                id="linearGradient-1"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="98.7331081%">
                <stop stop-color="#1E90BB" offset="0%"></stop>
                <stop stop-color="#373795" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-685.000000, -289.000000)">
                <g transform="translate(472.000000, 170.000000)">
                  <g transform="translate(113.000000, 120.000000)">
                    <g transform="translate(101.000000, 0.000000)">
                      <circle
                        stroke="#373795"
                        stroke-width="1.5"
                        cx="34"
                        cy="34"
                        r="34"></circle>
                      <circle
                        fill="url(#linearGradient-1)"
                        cx="34"
                        cy="34"
                        r="30"></circle>
                      <text
                        font-family="Helvetica"
                        font-size="26"
                        font-weight="normal"
                        line-spacing="14"
                        fill="#FFFFFF">
                        <tspan x="19" y="37">
                          30
                        </tspan>
                      </text>
                      <text
                        font-family="Helvetica"
                        font-size="11"
                        font-weight="normal"
                        line-spacing="14"
                        fill="#FFFFFF">
                        <tspan x="19" y="47">
                          DAYS
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="about-subscriptions__text">
          AUTOMATICALLY DELIVERED <br />
          EVERY 30 DAYS
        </div>
        <div class="about-subscriptions__icon">
          <svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
            <title>Group 2</title>
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="98.7331081%">
                <stop stop-color="#1E90BB" offset="0%"></stop>
                <stop stop-color="#373795" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-685.000000, -438.000000)">
                <g transform="translate(472.000000, 170.000000)">
                  <g transform="translate(113.000000, 269.000000)">
                    <g transform="translate(101.000000, 0.000000)">
                      <circle
                        stroke="#373795"
                        stroke-width="1.5"
                        cx="34"
                        cy="34"
                        r="34"></circle>
                      <circle
                        fill="url(#linearGradient-1)"
                        cx="34"
                        cy="34"
                        r="30"></circle>
                      <path
                        d="M44.16,22.2928932 L45.7071068,23.84 L36.0471068,33.5 L45.7071068,43.16 L44.1599817,44.7071251 L34.5,35.0461434 L24.8400183,44.7071251 L23.2929115,43.1600183 L32.9528932,33.4990366 L23.2928749,23.8400183 L24.84,22.2928932 L34.5,31.9528932 L44.16,22.2928932 Z"
                        stroke="#FFFFFF"
                        fill="#FFFFFF"
                        stroke-linejoin="round"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="about-subscriptions__text">
          NO STRINGS ATTACHED <br />
          CANCEL ANYTIME
        </div>
        <div class="about-subscriptions__icon">
          <svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
            <title>Group 2</title>
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="98.7331081%">
                <stop stop-color="#1E90BB" offset="0%"></stop>
                <stop stop-color="#373795" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-685.000000, -588.000000)">
                <g transform="translate(472.000000, 170.000000)">
                  <g transform="translate(93.000000, 419.000000)">
                    <g transform="translate(121.000000, 0.000000)">
                      <circle
                        stroke="#373795"
                        stroke-width="1.5"
                        cx="34"
                        cy="34"
                        r="34"></circle>
                      <circle
                        fill="url(#linearGradient-1)"
                        cx="34"
                        cy="34"
                        r="30"></circle>
                      <path
                        d="M55.6609355,29.0887521 C55.4439559,28.8708588 55.1496012,28.7484382 54.8426666,28.7484382 C54.535732,28.7484382 54.2413773,28.8708588 54.0243977,29.0887521 L49.9567895,33.1711748 L49.9567895,32.5392549 C49.9567895,23.41941 42.564682,16 33.4783959,16 C24.3921098,16 17,23.4194065 17,32.5392514 C17,41.7770723 24.3921075,49.2926829 33.4783924,49.2926829 C37.8511133,49.3047352 42.0468827,47.5603041 45.1302435,44.4482522 C45.5817098,43.9945884 45.5814958,43.2595498 45.1297654,42.8061509 C44.6780349,42.352752 43.9457012,42.3525372 43.4937068,42.805671 C40.843304,45.480434 37.2368968,46.9797534 33.4783959,46.9694131 C25.6686786,46.9694131 19.3146638,40.4960767 19.3146638,32.5392537 C19.3146638,24.6879483 25.6559829,18.3232078 33.4783965,18.3232078 C41.30081,18.3232078 47.6421291,24.6879483 47.6421291,32.5392537 L47.6421291,33.1711748 L43.5745197,29.0887556 C43.1226016,28.6351693 42.3898985,28.6351701 41.9379813,29.0887573 C41.4860642,29.5423446 41.486065,30.277754 41.9379831,30.7313402 L47.9804491,36.7961228 C48.0346724,36.8504135 48.0941085,36.8991928 48.157891,36.9417497 C48.1854042,36.9601832 48.2151788,36.972732 48.2437869,36.9885426 C48.3135337,37.034337 48.3910952,37.0668317 48.4725818,37.0843971 C48.5060645,37.094359 48.53817,37.1073329 48.5728876,37.1142503 C48.7223985,37.1448315 48.8765189,37.1448315 49.0260298,37.1142503 C49.0607497,37.1073376 49.0928529,37.0943636 49.1263356,37.0843971 C49.2078225,37.0668314 49.2853843,37.0343368 49.3551317,36.9885426 C49.3837398,36.972732 49.4135132,36.9601832 49.4410264,36.9417497 C49.5048093,36.8991928 49.5642458,36.8504135 49.6184695,36.7961228 L55.6609355,30.7313402 C55.8780288,30.513559 56,30.2181159 56,29.9100462 C56,29.6019765 55.8780288,29.3065334 55.6609355,29.0887521 L55.6609355,29.0887521 Z"
                        fill="#FFFFFF"
                        fill-rule="nonzero"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="about-subscriptions__text">
          UPDATE YOUR SUBSCRIPTION <br />
          WHEN YOU WANT
        </div>
      </div>
    </Fragment>
  );
}

export function InfoButton({ onClick }: { onClick: () => void }) {
  return (
    <div class="info" onClick={onClick}>
      <svg width="19px" height="19px" viewBox="0 0 19 19">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1319.000000, -483.000000)">
            <g transform="translate(0.000000, 77.000000)">
              <g transform="translate(935.000000, 32.000000)">
                <g transform="translate(70.000000, 65.000000)">
                  <g transform="translate(2.000000, 310.000000)">
                    <g transform="translate(26.000000, 0.000000)">
                      <g transform="translate(287.000000, 0.000000)">
                        <circle
                          stroke="currentColor"
                          cx="8.5"
                          cy="8.5"
                          r="8.5"></circle>
                        <text
                          font-family="Helvetica"
                          font-size="12"
                          font-weight="normal"
                          line-spacing="18"
                          letter-spacing="0.428571429"
                          fill="currentColor">
                          <tspan x="7.5" y="13">
                            i
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

interface SubscribeSelectProps {
  discountPercentage?: number;
  showInfo?: boolean;
  initialValue?: boolean;
  checked: boolean;
  toggleChecked: () => void;
}

export function SubscribeSelect({
  discountPercentage,
  showInfo = true,
  checked,
  toggleChecked,
}: SubscribeSelectProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div class="subscribe-select">
      <div class="bln-checkbox-container" onClick={toggleChecked}>
        <div class="bln-checkbox" role="checkbox">
          <div class={`bln-check ${checked ? '' : 'hide'}`}>
            <svg width="16px" height="11px" viewBox="0 0 16 11">
              <g
                stroke="none"
                stroke-width="1"
                fill="currentColor"
                fill-rule="evenodd">
                <g
                  transform="translate(-371.000000, -718.000000)"
                  fill="colorComputed">
                  <g transform="translate(257.000000, 0.000000)">
                    <g transform="translate(37.000000, 81.000000)">
                      <g transform="translate(75.000000, 633.000000)">
                        <g transform="translate(10.000000, 9.500000) scale(-1, 1) rotate(-90.000000) translate(-10.000000, -9.500000) translate(4.500000, 2.000000)">
                          <polygon
                            transform="translate(5.500025, 5.499990) rotate(-45.000000) translate(-5.500025, -5.499990)"
                            points="-0.999966138 4.79998971 12.0000249 4.79998971 12.0000249 6.19998971 -0.999966138 6.19998971"></polygon>
                          <polygon
                            transform="translate(3.500012, 11.449860) scale(1, -1) rotate(-45.000000) translate(-3.500012, -11.449860)"
                            points="2.89919205e-05 10.7498605 6.99999503 10.7498605 6.99999503 12.1498605 2.89919205e-05 12.1498605"></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="bln-checkbox-label">
          Subscribe & save {`${discountPercentage}%`}
        </div>
      </div>
      {showInfo && (
        <Fragment>
          <InfoButton onClick={() => setShowModal(true)} />
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <AboutSubscriptions />
          </Modal>
        </Fragment>
      )}
    </div>
  );
}
