import type { NextFunction, Request, Response } from "express";

/**
 * Middleware to log details of incoming HTTP requests and their responses.
 */
export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const startTime = process.hrtime();
  const { method, originalUrl, ip } = req;
  const timestamp = new Date().toISOString();

  // Log when the request completes or is closed
  res.on("finish", () => {
    const [seconds, nanoseconds] = process.hrtime(startTime);
    const durationInMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
    const { statusCode } = res;

    // Output formatted log string
    console.log(
      `[${timestamp}] ${method} ${originalUrl} - Status: ${statusCode} - Time: ${durationInMs}ms - IP: ${ip}`,
    );
  });

  next(); // Pass control to the next middleware function
};
