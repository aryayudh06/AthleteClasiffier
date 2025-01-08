# Athlete Classifier

## General Description

Sports Classifier is a web-based application designed to classify facial images into one of five sports categories. The application leverages machine learning with LogisticRegression model technology to detect and classify images with high accuracy, providing users with quick and reliable results.

## Key Features

- **Facial Classification into Five Sports Categories**: The application categorizes facial images into predefined sports categories based on a trained model.
- **Automatic Image Validation**: The system validates the image to ensure it meets the requirements before processing.
- **Fast Response Time**: Powered by optimized machine learning algorithms, it delivers results promptly.

### Technologies Used
- **Backend**: Python (Flask/Django)
- **Frontend**: HTML, CSS, JavaScript
- **Machine Learning**: Scikit

## Application Limitations

This application has several limitations to consider:

1. **Allowed Image Categories**: 
   - The image must belong to one of the five predefined categories.
2. **Clear Facial Visibility**: 
   - The face in the image must be clearly visible without obstructions.
3. **Facial Expression**: 
   - The face should not display a smile or significant contour changes.
4. **Number of Faces in the Image**:
   - The application struggles to process images containing more than one face.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/sports-classifier.git
   cd sports-classifier
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**:
   Run the server.py

4. **Access the Application**:
   Open your browser and open the index.html page.


## License

This project is licensed under the [MIT License](LICENSE).

