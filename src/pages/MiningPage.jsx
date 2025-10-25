import React, { useState, useEffect } from "react";
import styles from "./Page.module.scss";

const MiningPage = () => {
  const [activeTab, setActiveTab] = useState("token_finder");
  const [isScanning, setIsScanning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "[BOOT] Подключение к BTC Prototype...",
    "[AUTH] Пользователь: @username — проверка доступа...",
    "[OK] Соединение установлено",
    "[SYNC] Синхронизация узлов: 12% → 56% → 95% → 100%",
    "[DATA] Игровой баланс: 1100₿ • Энергия: 12",
    "[INFO] Готово к поиску. Нажми «Поиск», чтобы начать скан.",
  ]);
  const [showResult, setShowResult] = useState(false);
  const terminalRef = React.useRef(null);
  const [liveFeedMessages, setLiveFeedMessages] = useState([
    "[19:26] > user#1029: 3214₿ | 0xB2..4D",
    "[19:26] > @agent47: 589₿ | 0x6E..7F",
    "[19:26] > user#2288: 2301₿ | 0xD4..9E",
    "[19:27] > @trinity: 4932₿ | 0x77..FA",
    "[19:27] > user#9931: 247₿ | 0xCA..51",
    "[19:27] > @morpheus: 1024₿ | 0xF0..AA",
    "[19:28] > user#3142: 712₿ | 0x82..3C",
    "[19:28] > @oracle: 8392₿ | 0xDE..F5",
    "[19:28] > user#1190: 351₿ | 0x1A..B7",
  ]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalLogs, liveFeedMessages]);

  const startScan = () => {
    if (isScanning) return;

    setIsScanning(true);
    setShowResult(false);

    const scanMessages = [
      "$ search",
      "[SCAN] Подключение к узлам... ОК",
      "[NET] Синхронизация... 17% → 62% → 100%",
      "[HASH] Проверка блоков... ОК",
      "[DETECT] Найден активный адрес",
      "[ADDR] 0xA3b7...E2",
      "[BALANCE] 0.057 BTC",
      "[BOT] Отличная находка, {name}.",
      "[INFO] Поиск завершён",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < scanMessages.length) {
        setTerminalLogs((prev) => [...prev, scanMessages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setTimeout(() => {
          setShowResult(true);
        }, 1000);
      }
    }, 800);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        <div className={styles.prototypeText}>prototype</div>
        <div className={styles.balanceSection}>
          <div className={styles.balanceLabel}>Балансы</div>
          <div className={styles.balanceValues}>
            <div className={styles.balanceItem}>
              <img
                src="/mine-icons/bitcoin.svg"
                alt="bitcoin"
                className={styles.balanceIcon}
              />
              <span className={styles.balanceNumber}>3280</span>
            </div>
            <div className={styles.balanceDivider}></div>
            <div className={styles.balanceItem}>
              <img
                src="/mine-icons/energy.svg"
                alt="energy"
                className={styles.balanceIcon}
              />
              <span className={styles.balanceNumber}>12</span>
            </div>
          </div>
        </div>
        <div className={styles.welcomeCard}>
          <div className={styles.welcomeContent}>
            <div className={styles.symbolsRow}>
              <span className={styles.symbol}>#</span>
              <span className={styles.symbol}>$</span>
              <span className={styles.symbol}>%</span>
            </div>
            <div className={styles.welcomeText}>Удачного поиска, {name}!</div>
            <div className={styles.usernameText}>@username_telegram</div>
          </div>
          <div className={styles.largeHash}>
            <img src="/mine-icons/reshetka.svg" alt="hash" />
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.primaryButton}>
            <img
              src="/mine-icons/ai-agent.svg"
              alt="ai-agent"
              className={styles.buttonIcon}
            />
            <span className={styles.buttonText}>AI-agent</span>
          </button>
          <button className={styles.secondaryButton}>
            <img
              src="/mine-icons/tg.svg"
              alt="telegram"
              className={styles.buttonIcon}
            />
            <span className={styles.buttonText}>Телеграм</span>
          </button>
          <button className={styles.secondaryButton}>
            <img
              src="/mine-icons/concl.svg"
              alt="conclusions"
              className={styles.buttonIcon}
            />
            <span className={styles.buttonText}>Выводы</span>
          </button>
        </div>
        <div className={styles.terminalContainer}>
          <div className={styles.terminalTabs}>
            <div
              className={`${styles.tab} ${
                activeTab === "token_finder" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("token_finder")}
            >
              <img
                src="/mine-icons/token-finder.svg"
                alt="token-finder"
                className={styles.tabIcon}
              />
              <span className={styles.tabText}>Token_finder</span>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "live_feed" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("live_feed")}
            >
              <img
                src="/mine-icons/live.svg"
                alt="live"
                className={styles.tabIcon}
              />
              <span className={styles.tabText}>Live_feed</span>
            </div>
          </div>
          <div className={styles.terminalContent}>
            <div className={styles.terminalLogs} ref={terminalRef}>
              {activeTab === "token_finder"
                ? terminalLogs.map((log, index) => (
                    <div key={index} className={styles.logLine}>
                      {log}
                    </div>
                  ))
                : liveFeedMessages.map((message, index) => (
                    <div key={index} className={styles.logLine}>
                      {message}
                    </div>
                  ))}
            </div>
            <div className={styles.terminalInput}>
              <div
                className={`${styles.inputField} ${
                  activeTab === "live_feed" ? styles.fullWidthInput : ""
                }`}
              >
                <span className={styles.prompt}>$</span>
                <div className={styles.cursor}></div>
              </div>
              {activeTab === "token_finder" && (
                <button
                  className={styles.searchButton}
                  onClick={startScan}
                  disabled={isScanning}
                >
                  {isScanning ? (
                    <div className={styles.loadingDots}>
                      <div className={styles.dot}></div>
                      <div className={styles.dot}></div>
                      <div className={styles.dot}></div>
                      <div className={styles.dot}></div>
                    </div>
                  ) : (
                    <>
                      <span className={styles.searchText}>Поиск</span>
                      <img
                        src="/mine-icons/energywhite.svg"
                        alt="energy"
                        className={styles.lightningIcon}
                      />
                      <span className={styles.searchNumber}>1</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showResult && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <img
              src="/mine-icons/found.svg"
              alt="found"
              className={styles.foundIcon}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MiningPage;
