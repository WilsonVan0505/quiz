<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C1 Vocabulary Quiz - 30 Questions (Test 19)</title>
    <style>
        /* CSS Styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7f6;
            color: #333;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
        }

        .quiz-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
        }

        h1 {
            color: #007bff;
            text-align: center;
            margin-bottom: 10px;
        }

        .description {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }

        .question-card {
            background-color: #e9ecef;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 8px;
        }

        .question-text {
            font-size: 1.15em;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .options-container label {
            display: block;
            background-color: #fff;
            padding: 12px 15px;
            margin-bottom: 8px;
            border-radius: 6px;
            border: 1px solid #ccc;
            cursor: pointer;
            transition: background-color 0.2s, border-color 0.2s;
        }

        .options-container label:hover {
            background-color: #f0f8ff;
            border-color: #007bff;
        }

        input[type="radio"] {
            margin-right: 10px;
        }

        /* Styling for correct/incorrect answers */
        .correct-answer {
            background-color: #d4edda !important;
            border-color: #c3e6cb !important;
        }

        .incorrect-answer {
            background-color: #f8d7da !important;
            border-color: #f5c6cb !important;
        }

        /* Button styles */
        #submit-btn, .results-container button {
            display: block;
            width: 100%;
            padding: 12px;
            font-size: 1.1em;
            font-weight: bold;
            color: #fff;
            background-color: #28a745;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 30px;
        }

        #submit-btn:hover, .results-container button:hover {
            background-color: #218838;
        }

        /* Results section */
        .results-container {
            text-align: center;
            padding: 20px;
            border: 2px solid #007bff;
            border-radius: 10px;
            margin-top: 30px;
        }

        .results-container h2 {
            color: #007bff;
        }

        .results-container p {
            font-size: 1.2em;
            margin: 10px 0;
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="quiz-container">
        <h1>C1 Vocabulary Quiz: Fill-in-the-Blank</h1>
        <p class="description">Test your knowledge on 30 C1-level English vocabulary words from the Vocab - Đề 19 document.</p>
        
        <div id="quiz-questions">
            </div>

        <button id="submit-btn" onclick="submitQuiz()">Submit Quiz</button>

        <div id="results" class="results-container hidden">
            <h2>Your Results</h2>
            <p>Score: <span id="score">0</span> / 30</p>
            <p>Percentage: <span id="percentage">0</span>%</p>
            <button onclick="window.location.reload()">Try Again</button>
        </div>
    </div>

    <script>
        /* JavaScript Code */
        const quizData = [
            {
              "questionNumber": 1,
              "question": "The company's board of directors will meet next week to ________ a major restructuring plan for the Asian division.",
              "answerOptions": [
                {"text": "avoid"},
                {"text": "defer"},
                {"text": "carry out", "isCorrect": true},
                {"text": "retract"}
              ]
            },
            {
              "questionNumber": 2,
              "question": "If you are in Tokyo, you really should ________ the Imperial Palace. It's an unforgettable experience.",
              "answerOptions": [
                {"text": "pay attention to"},
                {"text": "make a request to"},
                {"text": "pay a visit to", "isCorrect": true},
                {"text": "draw a connection to"}
              ]
            },
            {
              "questionNumber": 3,
              "question": "The government is considering imposing a new 10% ________ on luxury goods imported from overseas to protect domestic industries.",
              "answerOptions": [
                {"text": "subsidy"},
                {"text": "tariff", "isCorrect": true},
                {"text": "exchange"},
                {"text": "rebate"}
              ]
            },
            {
              "questionNumber": 4,
              "question": "I heard the concert was incredible! I hope you all ________.",
              "answerOptions": [
                {"text": "Make a profit"},
                {"text": "Avoid the crowd"},
                {"text": "Have a blast", "isCorrect": true},
                {"text": "Face the facts"}
              ]
            },
            {
              "questionNumber": 5,
              "question": "Before accepting the job offer, he decided to ________ the pros and cons of relocating to a new country for several days.",
              "answerOptions": [
                {"text": "reject"},
                {"text": "ponder", "isCorrect": true},
                {"text": "declare"},
                {"text": "confuse"}
              ]
            },
            {
              "questionNumber": 6,
              "question": "It's difficult for her to lose weight because she often ________ sweet desserts after dinner.",
              "answerOptions": [
                {"text": "abstains from"},
                {"text": "indulges in", "isCorrect": true},
                {"text": "desists from"},
                {"text": "grapples with"}
              ]
            },
            {
              "questionNumber": 7,
              "question": "Despite multiple treatments, the patient continued to suffer from a ________, low-grade fever.",
              "answerOptions": [
                {"text": "transient"},
                {"text": "sporadic"},
                {"text": "ephemeral"},
                {"text": "persistent", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 8,
              "question": "The CEO decided to resign and allow someone else to ________ him.",
              "answerOptions": [
                {"text": "substantiate"},
                {"text": "retain"},
                {"text": "displace"},
                {"text": "substitute", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 9,
              "question": "The hikers complained of intense muscle ________ after completing the 20-mile trek.",
              "answerOptions": [
                {"text": "appetite"},
                {"text": "compliance"},
                {"text": "soreness", "isCorrect": true},
                {"text": "amendment"}
              ]
            },
            {
              "questionNumber": 10,
              "question": "The new policy mandates that all employees must ________ proof of their qualifications upon hiring.",
              "answerOptions": [
                {"text": "remind"},
                {"text": "submit", "isCorrect": true},
                {"text": "reject"},
                {"text": "defer"}
              ]
            },
            {
              "questionNumber": 11,
              "question": "The long journey across three time zones resulted in an overwhelming feeling of ________ for the traveler.",
              "answerOptions": [
                {"text": "eagerness"},
                {"text": "vibrancy"},
                {"text": "appetite"},
                {"text": "fatigue", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 12,
              "question": "The team found a way to ________ the exact humidity levels of the ancient chamber in their lab.",
              "answerOptions": [
                {"text": "destroy"},
                {"text": "replicate", "isCorrect": true},
                {"text": "distort"},
                {"text": "substitute"}
              ]
            },
            {
              "questionNumber": 13,
              "question": "The company decided to completely ________ its use of fossil fuels and invest heavily in renewable energy sources.",
              "answerOptions": [
                {"text": "embrace", "isCorrect": true},
                {"text": "deter"},
                {"text": "repel"},
                {"text": "repudiate"}
              ]
            },
            {
              "questionNumber": 14,
              "question": "The public witnessed a significant ________ in government policy towards environmental protection.",
              "answerOptions": [
                {"text": "plateau"},
                {"text": "stasis"},
                {"text": "shift", "isCorrect": true},
                {"text": "recurrence"}
              ]
            },
            {
              "questionNumber": 15,
              "question": "It is an established ________ that employees should not discuss their personal finances in the workplace.",
              "answerOptions": [
                {"text": "prejudice"},
                {"text": "anomaly"},
                {"text": "norm", "isCorrect": true},
                {"text": "controversy"}
              ]
            },
            {
              "questionNumber": 16,
              "question": "The athlete suffered from a painful, pulled hamstring in his right ________ during the final sprint.",
              "answerOptions": [
                {"text": "torso"},
                {"text": "forearm"},
                {"text": "thigh", "isCorrect": true},
                {"text": "calves"}
              ]
            },
            {
              "questionNumber": 17,
              "question": "Hiking at such a high altitude proved to be a very ________ experience, even for the seasoned mountaineers.",
              "answerOptions": [
                {"text": "frivolous"},
                {"text": "superfluous"},
                {"text": "effortless"},
                {"text": "strenuous", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 18,
              "question": "The patient's condition became ________ after a full day of medical tests and consultations.",
              "answerOptions": [
                {"text": "antecedent"},
                {"text": "prior"},
                {"text": "subsequent", "isCorrect": true},
                {"text": "simultaneous"}
              ]
            },
            {
              "questionNumber": 19,
              "question": "The new transit system is expected to ________ travel time by up to 30 minutes for daily commuters.",
              "answerOptions": [
                {"text": "impede"},
                {"text": "obstruct"},
                {"text": "inhibit"},
                {"text": "facilitate", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 20,
              "question": "The technician warned of the potential danger from exposure to high levels of microwave ________.",
              "answerOptions": [
                {"text": "momentum"},
                {"text": "convection"},
                {"text": "radiation", "isCorrect": true},
                {"text": "refraction"}
              ]
            },
            {
              "questionNumber": 21,
              "question": "After the injury, his knee began to ________ significantly, making it impossible to bend.",
              "answerOptions": [
                {"text": "recede"},
                {"text": "contract"},
                {"text": "swell", "isCorrect": true},
                {"text": "shrivel"}
              ]
            },
            {
              "questionNumber": 22,
              "question": "The development project presents a difficult ________ for the mayor, as it will please some but anger many others.",
              "answerOptions": [
                {"text": "solution"},
                {"text": "certainty"},
                {"text": "dilemma", "isCorrect": true},
                {"text": "consensus"}
              ]
            },
            {
              "questionNumber": 23,
              "question": "Students are finding it challenging to ________ the complex calculations required for the advanced physics course.",
              "answerOptions": [
                {"text": "elude"},
                {"text": "submit"},
                {"text": "grapple with", "isCorrect": true},
                {"text": "defer to"}
              ]
            },
            {
              "questionNumber": 24,
              "question": "The runner made a sudden, desperate ________ toward the finish line after tripping over his own feet.",
              "answerOptions": [
                {"text": "saunter"},
                {"text": "lunge", "isCorrect": true},
                {"text": "retreat"},
                {"text": "meander"}
              ]
            },
            {
              "questionNumber": 25,
              "question": "The doctor's diagnosis was that the pain in her throat was simply a mild ________, likely caused by a common cold.",
              "answerOptions": [
                {"text": "agony"},
                {"text": "sore"},
                {"text": "ache", "isCorrect": true},
                {"text": "laceration"}
              ]
            },
            {
              "questionNumber": 26,
              "question": "After moving to the busy city, she quickly ________ the constant background noise.",
              "answerOptions": [
                {"text": "used to hearing"},
                {"text": "used to hear"},
                {"text": "got used to hearing", "isCorrect": true},
                {"text": "must get used to hear"}
              ]
            },
            {
              "questionNumber": 27,
              "question": "Many economists ________ a slight increase in the national inflation rate in the next quarter.",
              "answerOptions": [
                {"text": "are oblivious to"},
                {"text": "are surprised by"},
                {"text": "anticipate", "isCorrect": true},
                {"text": "repudiate"}
              ]
            },
            {
              "questionNumber": 28,
              "question": "The lack of sunlight led to a noticeable loss of ________ in the elderly patient.",
              "answerOptions": [
                {"text": "disposition"},
                {"text": "inclination"},
                {"text": "appetite", "isCorrect": true},
                {"text": "preoccupation"}
              ]
            },
            {
              "questionNumber": 29,
              "question": "The rising cost of airplane ________ is making international travel too expensive for many families this summer.",
              "answerOptions": [
                {"text": "freight"},
                {"text": "tariff"},
                {"text": "subsidy"},
                {"text": "fare", "isCorrect": true}
              ]
            },
            {
              "questionNumber": 30,
              "question": "Wearing safety goggles in the laboratory is ________, and failure to comply will result in disciplinary action.",
              "answerOptions": [
                {"text": "optional"},
                {"text": "voluntary"},
                {"text": "compulsory", "isCorrect": true},
                {"text": "advisory"}
              ]
            }
          ];

        const quizQuestionsContainer = document.getElementById('quiz-questions');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit-btn');

        // Hàm tạo giao diện câu hỏi
        function buildQuiz() {
            const output = [];

            quizData.forEach((currentQuestion, questionNumber) => {
                const answers = [];

                currentQuestion.answerOptions.forEach(option => {
                    // Thêm các nút radio cho mỗi lựa chọn
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${option.text}">
                            ${option.text}
                        </label>`
                    );
                });

                // Thêm câu hỏi và các lựa chọn vào output
                output.push(
                    `<div class="question-card" id="q${questionNumber}">
                        <div class="question-text">${currentQuestion.questionNumber}. ${currentQuestion.question}</div>
                        <div class="options-container">${answers.join('')}</div>
                    </div>`
                );
            });

            quizQuestionsContainer.innerHTML = output.join('');
        }

        // Hàm chấm điểm và hiển thị kết quả
        function submitQuiz() {
            let score = 0;

            quizData.forEach((currentQuestion, questionNumber) => {
                const questionCard = document.getElementById(`q${questionNumber}`);
                const selectedOption = questionCard.querySelector(`input[name="question${questionNumber}"]:checked`);
                let userAnswer = '';
                
                if (selectedOption) {
                    userAnswer = selectedOption.value;
                }

                let correctAnswerText = currentQuestion.answerOptions.find(opt => opt.isCorrect).text;

                // Xóa các lớp cũ và vô hiệu hóa các nút radio
                const labels = questionCard.querySelectorAll('label');
                labels.forEach(label => {
                    label.querySelector('input').disabled = true;
                    if (label.textContent.trim() === correctAnswerText) {
                        // Đánh dấu đáp án đúng
                        label.classList.add('correct-answer');
                    } else if (label.textContent.trim() === userAnswer) {
                        // Đánh dấu đáp án sai của người dùng
                        label.classList.add('incorrect-answer');
                    }
                });
                
                // Chấm điểm
                if (userAnswer === correctAnswerText) {
                    score++;
                }
            });

            // Hiển thị kết quả
            const percentage = Math.round((score / quizData.length) * 100);

            document.getElementById('score').textContent = score;
            document.getElementById('percentage').textContent = percentage;
            
            submitButton.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
        }

        // Chạy hàm tạo bài kiểm tra khi trang được tải
        document.addEventListener('DOMContentLoaded', buildQuiz);
    </script>
</body>
</html>