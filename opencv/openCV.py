import cv2
import numpy as np


def nothing(x):
    pass


def initTrackbar():
    cv2.namedWindow(parameters_window_name)
    cv2.resizeWindow(parameters_window_name, 300, 800)
    cv2.createTrackbar("Threshold1", parameters_window_name, 75, 1000, nothing)
    cv2.createTrackbar("Threshold2", parameters_window_name, 380, 1000, nothing)
    cv2.createTrackbar("BlurWeight", parameters_window_name, 1, 100, nothing)
    cv2.createTrackbar("dilate", parameters_window_name, 0, 10, nothing)
    cv2.createTrackbar("Area", parameters_window_name, 0, 2000, nothing)

    cv2.createTrackbar("HH", parameters_window_name, 126, 360, nothing)
    cv2.createTrackbar("LH", parameters_window_name, 14, 360, nothing)
    cv2.createTrackbar("HS", parameters_window_name, 195, 255, nothing)
    cv2.createTrackbar("LS", parameters_window_name, 0, 255, nothing)
    cv2.createTrackbar("HV", parameters_window_name, 40, 255, nothing)
    cv2.createTrackbar("LV", parameters_window_name, 4, 255, nothing)


def getTrackbar():
    threshold1 = cv2.getTrackbarPos("Threshold1", parameters_window_name)
    threshold2 = cv2.getTrackbarPos("Threshold2", parameters_window_name)
    LH = cv2.getTrackbarPos("LH", parameters_window_name)
    HH = cv2.getTrackbarPos("HH", parameters_window_name)
    LS = cv2.getTrackbarPos("LS", parameters_window_name)
    HS = cv2.getTrackbarPos("HS", parameters_window_name)
    LV = cv2.getTrackbarPos("LV", parameters_window_name)
    HV = cv2.getTrackbarPos("HV", parameters_window_name)

    blurWeight = cv2.getTrackbarPos(
        "BlurWeight",
        parameters_window_name,
    )

    dilate = cv2.getTrackbarPos(
        "dilate",
        parameters_window_name,
    )
    return threshold1, threshold2, LH, HH, LS, HS, LV, HV, blurWeight, dilate


def show():
    cv2.imshow("origin", resizedImage)
    cv2.imshow("blurred", blurred)
    cv2.imshow("Canny Edges", edges)
    cv2.imshow("dilate", dilate)

    cv2.imshow("mask", mask)
    cv2.imshow("Canny Edges2", edges2)
    cv2.imshow("contours", empty_image)


parameters_window_name = "Parameters"
originIMage = cv2.imread("img.jpg")
resizedImage = cv2.resize(originIMage, (500, 500))
empty_image = np.zeros((500, 500, 3), dtype=np.uint8)
empty_image.fill(255)

initTrackbar()
while True:
    empty_image.fill(255)

    threshold1, threshold2, LH, HH, LS, HS, LV, HV, blurWeight, dilation = getTrackbar()

    blurred = cv2.GaussianBlur(resizedImage, (blurWeight, blurWeight), 0)

    # Start Canny strategy
    edges = cv2.Canny(blurred, threshold1, threshold2, apertureSize=3)
    kernel = np.ones((dilation, dilation), np.uint8)
    dilate = cv2.dilate(edges, kernel, iterations=1)
    # End Canny strategy

    # Find the contours strategy
    mask = cv2.inRange(blurred, (LH, LS, LV), (HH, HS, HV))
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for cnt in contours:
        area = cv2.contourArea(cnt)
        areaMin = cv2.getTrackbarPos("Area", parameters_window_name)
        if area > areaMin:
            cv2.drawContours(empty_image, cnt, -1, (0, 200, 0), 3)

    edges2 = cv2.Canny(mask, threshold1, threshold2, apertureSize=3)

    # End Find the contours strategy

    show()
    key = cv2.waitKey(1)
    if key == 27:  # ASCII pour 'Esc'
        break

# Fermer toutes les fenêtres
cv2.destroyAllWindows()
