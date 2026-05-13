import java.util.ArrayList;

/**
 * Base class for all AI subscription plans.
 * Holds the common info every plan needs - name, price, parameters, context window.
 *
 * @author Sudip Bharati
 * @version 1.0
 */
public abstract class AIModel {

    private String modelName;
    private double price;
    private int parameterCount;
    private String contextWindow; // e.g. "64K", "128K", "1M"

    /**
     * Sets up a new AI model with the given details.
     *
     * @param modelName      name of the model
     * @param price          cost per 100,000 tokens in Rs.
     * @param parameterCount how many billion parameters the model has
     * @param contextWindow  max context size like "64K" or "128K"
     */
    public AIModel(String modelName, double price, int parameterCount, String contextWindow) {
        this.modelName = modelName;
        this.price = price;
        this.parameterCount = parameterCount;
        this.contextWindow = contextWindow;
    }

    // Getters

    /** @return the model name */
    public String getModelName() {
        return modelName;
    }

    /** @return price per 100,000 tokens in Rs. */
    public double getPrice() {
        return price;
    }

    /** @return parameter count in billions */
    public int getParameterCount() {
        return parameterCount;
    }

    /** @return context window string e.g. "64K" */
    public String getContextWindow() {
        return contextWindow;
    }

    /**
     * Estimates total tokens for a prompt + expected output.
     * Uses a simple rule: 1 token ≈ 4 characters for the input.
     *
     * @param promptText   the user's input text
     * @param outputTokens expected output token count
     * @return total estimated tokens
     */
    public int calculateTokens(String promptText, int outputTokens) {
        // rough estimate: 1 token ~ 4 characters
        int inputTokens = (int) Math.ceil(promptText.length() / 4.0);
        return inputTokens + outputTokens;
    }

    /**
     * Converts the context window string like "64K" or "1M" into an actual integer.
     * Falls back to Integer.MAX_VALUE if it can't be parsed.
     *
     * @return context window size as a number
     */
    protected int getContextWindowAsInt() {
        String cw = contextWindow.trim().toUpperCase();
        try {
            if (cw.endsWith("K")) {
                return Integer.parseInt(cw.substring(0, cw.length() - 1)) * 1000;
            } else if (cw.endsWith("M")) {
                return Integer.parseInt(cw.substring(0, cw.length() - 1)) * 1_000_000;
            } else {
                return Integer.parseInt(cw);
            }
        } catch (NumberFormatException e) {
            return Integer.MAX_VALUE;
        }
    }

    /**
     * Returns a readable summary of this plan.
     * Each subclass formats its own relevant details.
     *
     * @return plan details as a formatted string
     */
    public abstract String display();

    /**
     * Submits a prompt and returns the result or an error message.
     * Personal and Pro plans handle this differently.
     *
     * @param promptText   the prompt to submit
     * @param outputTokens expected output token count
     * @return result message
     */
    public abstract String enterPrompt(String promptText, int outputTokens);
}
